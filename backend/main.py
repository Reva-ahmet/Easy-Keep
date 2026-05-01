from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel # This helps handle the data you send from React

app = FastAPI()

# This part allows your React website to talk to your FastAPI brain.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. We move the links here so we can add more later.
db_bookmarks = [
    {"id": 1, "title": "Google", "url": "https://google.com"},
    {"id": 2, "title": "YouTube", "url": "https://youtube.com/"}
]

# 2. This defines what a "Bookmark" looks like when it comes from the website.
class Bookmark(BaseModel):
    title: str
    url: str

@app.get("/")
def read_root():
    return {"message": "Welcome to the Easy-Keep API!"}

@app.get("/bookmarks")
def get_bookmarks():
    # Returns our list of links.
    return db_bookmarks

@app.post("/bookmarks")
def add_bookmark(bookmark: Bookmark):
    # This takes the new link from React and saves it in our list!
    new_data = {
        "id": len(db_bookmarks) + 1, 
        "title": bookmark.title, 
        "url": bookmark.url
    }
    db_bookmarks.append(new_data)
    return new_data

@app.delete("/bookmarks/{bookmark_id}")
def delete_bookmark(bookmark_id: int):
    global db_bookmarks
    # We keep only the bookmarks that DO NOT match the ID we want to delete
    db_bookmarks = [b for b in db_bookmarks if b["id"] != bookmark_id]
    return {"message": "Deleted successfully"}
import React, { useEffect, useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  // 1. Load the bookmarks when the page opens
  useEffect(() => {
    fetch('http://127.0.0.1:8000/bookmarks')
      .then(response => response.json())
      .then(data => setBookmarks(data));
  }, []);

  // 2. Function to add a new bookmark
  const addBookmark = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/bookmarks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, url }),
    });

    if (response.ok) {
      const savedBookmark = await response.json();
      setBookmarks([...bookmarks, savedBookmark]);
      setTitle('');
      setUrl('');
    }
  };

  // 3. Function to delete a bookmark
  const deleteBookmark = async (id) => {
    const response = await fetch(`http://127.0.0.1:8000/bookmarks/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setBookmarks(bookmarks.filter(b => b.id !== id));
    }
  };

  const styles = {
    container: { padding: '40px', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' },
    title: { color: '#2c3e50', textAlign: 'center', marginBottom: '20px' },
    form: { display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px' },
    input: { padding: '10px', borderRadius: '5px', border: '1px solid #ddd', width: '200px' },
    addButton: { padding: '10px 20px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
    list: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', listStyle: 'none', padding: 0 },
    card: { backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    link: { textDecoration: 'none', color: '#3498db', fontWeight: 'bold', fontSize: '18px', display: 'block', marginBottom: '15px' },
    // *** Balanced Button Style ***
    deleteButton: { 
      backgroundColor: '#e74c3c', 
      color: 'white', 
      border: 'none', 
      padding: '6px 15px', 
      borderRadius: '5px', 
      cursor: 'pointer', 
      fontSize: '13px', 
      width: 'fit-content', 
      margin: '0 auto',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Easy-Keep</h1>
      
      <form style={styles.form} onSubmit={addBookmark}>
        <input style={styles.input} type="text" placeholder="Site Name" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input style={styles.input} type="text" placeholder="URL (https://...)" value={url} onChange={(e) => setUrl(e.target.value)} required />
        <button style={styles.addButton} type="submit">Add Link</button>
      </form>

      <ul style={styles.list}>
        {bookmarks.map(bookmark => (
          <li key={bookmark.id} style={styles.card}>
            <a href={bookmark.url} target="_blank" rel="noreferrer" style={styles.link}>
              {bookmark.title}
            </a>
            <button onClick={() => deleteBookmark(bookmark.id)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
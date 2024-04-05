import React, { useState } from 'react';

// Declaração do componente AddPostForm
const AddPostForm = ({ addPost }) => {          
  const [name, setName] = useState('');         
  const [message, setMessage] = useState('');   
  const [photo, setPhoto] = useState('');

  // Função chamada quando o formulário é submetido
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message || !photo) return;
    addPost({ name, message, photo });          // Chama a função addPost passando os dados do novo post
    // Reset - Limpar os campos do formulário
    setName('');
    setMessage('');
    setPhoto('');
  };

  // Retorno do componente JSX
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" className="input" />
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mensagem" className="input" />
      <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="URL da imagem" className="input" />
      <button type="submit" className="button">Publicar</button>
    </form>
  );
};

export default AddPostForm;

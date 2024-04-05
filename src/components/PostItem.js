import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importando FontAwesomeIcon para utilizar ícones
import { faTrash } from '@fortawesome/free-solid-svg-icons';      // Importando ícone da lixeira
import './styles.css';                                            // Importando CSS

// Declarar componente PostItem
const PostItem = ({ post, index, removePost }) => {
  const { name, message, photo } = post;

  // Função para excluir um post
  const handleRemove = () => {
    removePost(index);
  };

  // Dados enviados pelo usuário - POST
  return (
    <div className="post">
      <div className="user-info">
        <div className="user-image">
          <img src={photo} alt={name} className="avatar" />
        </div>
        <div className="message">{message}</div>
        <div className="user-details">
          <p>Enviado por: <strong>{name}</strong></p>
        </div>
      </div>
      <button onClick={handleRemove} className="delete-button">
        <FontAwesomeIcon icon={faTrash} className="delete-icon" />
      </button>
    </div>
  );
};

export default PostItem;


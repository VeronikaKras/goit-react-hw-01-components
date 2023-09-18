import css from './FriendListItem.module.css';
import React from 'react';


export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className={css.item}>
            {isOnline === true ? (
        <span className={css.true}>{isOnline}</span>
      ) : (
        <span className={css.false}>{isOnline}</span>
      )}
            <img className={css.avatar} src={ avatar} alt={name} width="48" />
            <p className={css.name}>{ name}</p>
    </li>
    );
}
 

import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import React from 'react';
import css from './FriendList.module.css';



export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
                

        </ul>)
}
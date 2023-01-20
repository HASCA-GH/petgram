import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles';
import data from '../../db.json';

export const ListOfCategories = () => {
  return (
    <List>
        {data.categories.map(category => 
            <Item key={category.id}>
                <Category 
                    cover={category.cover}
                    path={category.path}
                    emoji={category.emoji}
                />
            </Item>)
        }
    </List>
  )
}

// [1, 2, 3, 4].map(category => 
//     <Item key={category}>
//         <Category/>
//     </Item>)

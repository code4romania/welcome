import React from 'react'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import { ListItem } from 'material-ui/List'

const style = {
  color: 'Red'
}

const Camp = (props) => <ListItem className={props.activeCamp} onClick={props.onSelectCamp} primaryText={`${props.cid} ${props.name} ${props.somekey ? props.somekey : ''}`}
  rightIconButton={props.hasRemove ? <FloatingActionButton onClick={props.onDeleteCamp} mini secondary title='Remove camp'>
    <ContentRemove style={style} />
  </FloatingActionButton> : null} />

export default Camp

import React from 'react'
import { deleteNode } from '../../redux/slices/nodes'
import { useAppDispatch } from '../../redux/store'

interface NodeSingleProps {
    name: string
    id: number
    parentId: number
    enterEditMode: () => void
    setParent: (parent: number) => void
}

export const NodeSingle: React.FC<NodeSingleProps> = ({
    name,
    id,
    parentId,
    enterEditMode,
    setParent,
}) => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <div>{name}</div>
            <div>{'parent: ' + parentId}</div>
            <button onClick={() => dispatch(deleteNode(id))}>Delete</button>
            <button onClick={() => enterEditMode()}>Edit</button>
            <button onClick={() => setParent(id)}>Add subNode</button>
        </div>
    )
}

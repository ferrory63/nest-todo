import React, { useState } from 'react'
import './App.css'
import { CustomForm } from './components/customForm'
import { EditForm } from './components/editFrom'
import { NodeSingle } from './components/node'
import { INode } from './redux/slices/nodes'
import { useAppDispatch, useAppSelector } from './redux/store'

function App() {
    const dispatch = useAppDispatch()
    const { nodesList } = useAppSelector((state) => state.nodes)

    const [editNode, setEditNode] = useState<INode | null>(null)

    const [isEditing, setIsEditing] = useState(false)
    const [isAdding, setIsAddng] = useState(false)
    const [parentId, setParentId] = useState(0)

    const enterAddSubNode = (parent: number) => {
        setParentId(parent)
    }

    const enterEditMode = (node: INode) => {
        setIsEditing(true)
        setEditNode(node)
    }

    const closeEditMode = () => {
        setIsEditing(false)
        setEditNode(null)
    }

    return (
        <div className="container">
            {!isEditing && <CustomForm parentId={parentId} />}
            {isEditing && (
                <EditForm
                    selectedNode={editNode}
                    onEditSucces={() => closeEditMode()}
                />
            )}
            {nodesList.map((item) => (
                <NodeSingle
                    enterEditMode={() => enterEditMode(item)}
                    key={item.id}
                    {...item}
                    setParent={() => enterAddSubNode(item.id)}
                />
            ))}
        </div>
    )
}

export default App

import React, { useState } from 'react'
import { addNode, editNode } from '../../redux/slices/nodes'
import { useAppDispatch } from '../../redux/store'
import { INode } from '../../redux/slices/nodes'
import { SubmitHandler, useForm } from 'react-hook-form'

interface EditFormProps {
    selectedNode: INode | null
    onEditSucces: () => void
}

interface IFormData {
    name: string
}

export const EditForm: React.FC<EditFormProps> = ({
    selectedNode,
    onEditSucces,
}) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(selectedNode?.name)
    const dispatch = useAppDispatch()

    const { handleSubmit } = useForm<IFormData>()

    const onSubmit: SubmitHandler<IFormData> = () => {
        if (selectedNode) {
            dispatch(
                editNode({
                    id: selectedNode.id,
                    parentId: selectedNode.parentId,
                    name: updatedTaskName,
                } as INode)
            )
            onEditSucces()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="wrapper">
                    <input
                        type="text"
                        id="task"
                        className="input"
                        required
                        value={updatedTaskName}
                        onChange={(e) => setUpdatedTaskName(e.target.value)}
                        autoFocus
                        maxLength={20}
                        placeholder="update node"
                    />
                </div>
                <input type="submit" value="Edit" />
            </form>
        </div>
    )
}

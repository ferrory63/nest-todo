import React, { useState } from 'react'
import { addNode } from '../../redux/slices/nodes'
import { useAppDispatch } from '../../redux/store'
import { INode } from '../../redux/slices/nodes'
import { SubmitHandler, useForm } from 'react-hook-form'

interface CustomFormProps {
    parentId: number
    formerName?: string
}

interface IFormData {
    name: string
}

export const CustomForm: React.FC<CustomFormProps> = ({
    parentId = 0,
    formerName = null,
}) => {
    const [node, setNode] = useState(formerName ? formerName : '')
    const dispatch = useAppDispatch()

    const { handleSubmit } = useForm<IFormData>()

    const onSubmit: SubmitHandler<IFormData> = () => {
        dispatch(
            addNode({ name: node, id: Date.now(), parentId: parentId } as INode)
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="wrapper">
                <input
                    type="text"
                    id="task"
                    className="input"
                    required
                    value={node}
                    onChange={(e) => setNode(e.target.value)}
                    autoFocus
                    maxLength={20}
                    placeholder="Enter node name"
                />
            </div>
            <input type="submit" value="Add" />
        </form>
    )
}

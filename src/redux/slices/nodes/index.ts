import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface INodeSliceState {
    nodesList: INode[]
}

export interface INode {
    id: number
    name: string
    parentId: number
}

const initialState: INodeSliceState = {
    nodesList: [],
}

const nodesSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNode(state, action: PayloadAction<INode>) {
            state.nodesList = [...state.nodesList, action.payload]
        },
        editNode(state, action: PayloadAction<INode>) {
            const selectedNode = state.nodesList.find(
                (obj) => obj.id === action.payload.id
            )
            if (selectedNode) {
                selectedNode!.name = action.payload.name
            }
        },
        deleteNode(state, action: PayloadAction<number>) {
            state.nodesList = state.nodesList.filter(
                (item) => item.id !== action.payload
            )
        },
        resetNodes(state) {
            state.nodesList = []
        },
    },
})

export const { addNode, deleteNode, editNode, resetNodes } = nodesSlice.actions

export default nodesSlice.reducer

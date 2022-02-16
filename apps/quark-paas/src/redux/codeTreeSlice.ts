import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid";
import { CSSProperties } from "react";
import { traverse } from "../utils";

export interface ComNodeSchema {
  id: string; // 组件唯一id
  type: string; // 组件类型
  props: Record<string, any>; // 组件 props
  children: ComNodeSchema[]; // 子组件
  extra?: Record<string, any>; // 额外数据（用于扩展）
}

export interface PageNodeSchema {
  id: string;
  name: string;
  style: CSSProperties;
  route: any;
  children: ComNodeSchema;
  comref: ComRefSchema[];
}

export interface ComRefSchema {
  id: string; // 组件唯一id
  keyPath?: any[];
  comlib?: ComLibSchema
}

export interface ComLibSchema {
  id: string; // 组件库唯一id
  branch?: string; // 分支
  version?: string; // 版本号
  url?: string;
  components: any[];
}

export interface CodeTreeState {
  focusId?: string;
  env: Env;
  type: string;
  pages: ComNodeSchema[];
  comref: Record<string, ComRefSchema>;
  comlibs: ComLibSchema[];
}

const rootId = nanoid(10);

const initialState: CodeTreeState = {
  focusId: '',
  env: {
    edit: {}
  },
  type: 'spa-h5',
  pages: [
    {
      id: rootId,
      type: 'div',
      props: {
        width: '414px',
        height: '1242px'
      },
      children: [

      ]
    }
  ],
  comref: {
    [rootId]: {
      id: rootId,
      keyPath: [0]
    }
  },
  comlibs: []
}

const codeTree = createSlice({
  name: 'codeTree',
  initialState,
  reducers: {
    append: (state, action) => {
      const { parentId, item } = action.payload;
      traverse(state.pages[0], (node) => {
        if (node.id === parentId) {
          node.children.push(item);
          return false;
        }
        return true;
      });
    },
    move: (state, action) => {
      const { dragItem, overItem } = action.payload;

      const { draggedId, dragParentId } = dragItem;
      const { overId, overParentId } = overItem;

    },
    remove: (state, action) => {
      const { targetId, parentId } = action.payload;
      traverse(state.pages[0], (node) => {
        if (node.id === parentId) {
          const targetIndex = node.children.findIndex((item) => item.id === targetId);
          node.children.splice(targetIndex, 1)
          return false;
        }
        return true;
      });
    },
    update: (state, action) => {
      const { focusId } = state;
      const { key, value } = action.payload;

    },
    setFocus: (state, action) => {
      const { focusId } = action.payload;
      state.focusId = focusId;
    },
  }
});

export const { append, move, remove, update, setFocus } = codeTree.actions;

export default codeTree.reducer;

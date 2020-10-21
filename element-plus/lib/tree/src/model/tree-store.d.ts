import Node from './node';
import { TreeKey, TreeData, TreeStoreNodesMap, LoadFunction, FilterNodeMethodFunction, TreeOptionProps, TreeStoreOptions, FilterValue, TreeNodeData } from '../tree.d';
export default class TreeStore {
    currentNode: Node;
    currentNodeKey: TreeKey;
    nodesMap: TreeStoreNodesMap;
    root: Node;
    data: TreeData;
    lazy: boolean;
    load: LoadFunction;
    filterNodeMethod: FilterNodeMethodFunction;
    key: TreeKey;
    defaultCheckedKeys: TreeKey[];
    checkStrictly: boolean;
    defaultExpandedKeys: TreeKey[];
    autoExpandParent: boolean;
    defaultExpandAll: boolean;
    checkDescendants: boolean;
    props: TreeOptionProps;
    constructor(options: TreeStoreOptions);
    filter(value: FilterValue): void;
    setData(newVal: TreeData): void;
    getNode(data: TreeKey | TreeNodeData): Node;
    insertBefore(data: TreeNodeData, refData: TreeKey | TreeNodeData): void;
    insertAfter(data: TreeNodeData, refData: TreeKey | TreeNodeData): void;
    remove(data: TreeNodeData | Node): void;
    append(data: TreeNodeData, parentData: TreeNodeData | TreeKey | Node): void;
    _initDefaultCheckedNodes(): void;
    _initDefaultCheckedNode(node: Node): void;
    setDefaultCheckedKey(newVal: TreeKey[]): void;
    registerNode(node: Node): void;
    deregisterNode(node: Node): void;
    getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): TreeNodeData[];
    getCheckedKeys(leafOnly?: boolean): TreeKey[];
    getHalfCheckedNodes(): TreeNodeData[];
    getHalfCheckedKeys(): TreeKey[];
    _getAllNodes(): Node[];
    updateChildren(key: TreeKey, data: TreeData): void;
    _setCheckedKeys(key: TreeKey, leafOnly: boolean, checkedKeys: {
        [key: string]: boolean;
    }): void;
    setCheckedNodes(array: Node[], leafOnly?: boolean): void;
    setCheckedKeys(keys: TreeKey[], leafOnly?: boolean): void;
    setDefaultExpandedKeys(keys: TreeKey[]): void;
    setChecked(data: TreeKey | TreeNodeData, checked: boolean, deep: boolean): void;
    getCurrentNode(): Node;
    setCurrentNode(currentNode: Node): void;
    setUserCurrentNode(node: Node): void;
    setCurrentNodeKey(key: TreeKey): void;
}
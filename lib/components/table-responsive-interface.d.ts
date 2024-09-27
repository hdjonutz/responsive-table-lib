export declare enum IStates {
    SmallerToBigger = 0,
    BiggerToSmaller = 1,
    Nothing = 2
}
export declare enum ITypes {
    string = "string",
    number = "number"
}
export declare enum SelectionType {
    multi = "multi",
    simple = "simple"
}
export interface IResponsiveTableConfig {
    showCheckHeader: boolean;
    displayTableName: boolean;
    displayFooter: boolean;
    headerHeight?: number;
    footerHeight?: number;
    rowHeight?: number;
    rowMinHeight?: number;
    rowMaxHeight?: number;
    showLoading: boolean;
    scrollV: boolean;
    scrollH: boolean;
    language: string;
    messageTableNoData: string;
    selectionType: SelectionType;
    defaultSorting?: Array<{
        key: string;
        direction: IStates;
        type: ITypes;
    }>;
}

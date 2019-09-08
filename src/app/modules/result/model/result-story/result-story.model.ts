export interface ResultStory {
    messages: Map<number, Object>;
    id?: string;

    getObject(): Object;
}
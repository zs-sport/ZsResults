import { ResultStory } from './result-story.model';

export class ResultStoryImpl implements ResultStory {
    messages: Map<number, Object>;
    id?: string;

    constructor(properties: Object) {
        if (properties["id"]) {
            this.id = properties["id"];
        }

        this.messages = properties["messages"] || null;
    }

    getObject(): Object {
      let object = {messages:{}};

      if (this.messages) {
        this.messages.forEach((vaule, key) => {
          object.messages[key] = vaule;
        });
      }

      return object;
    };
}
import * as i18n from '../i18n_ast';
import { PlaceholderMapper, Serializer } from './serializer';
export declare class Xmb extends Serializer {
    write(messages: i18n.Message[], locale: string | null): string;
    load(content: string, url: string): {
        locale: string;
        i18nNodesByMsgId: {
            [msgId: string]: i18n.Node[];
        };
    };
    digest(message: i18n.Message): string;
    createNameMapper(message: i18n.Message): PlaceholderMapper;
}
export declare function digest(message: i18n.Message): string;
export declare function toPublicName(internalName: string): string;
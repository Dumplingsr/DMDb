import HandlerStructure from '../structures/handler';

class UtilHandler extends HandlerStructure {
    constructor(client) {
        super(client, 'util');

        this.loadFiles();
    }
}

export default UtilHandler;

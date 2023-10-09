class ExpressError extends Error{
    constructor(message,stausCode){
        super();
        this.message=message;
        this.stausCode= stausCode;
    }
}

module.exports=ExpressError;
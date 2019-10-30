export const errorHandler = (codeR, messageR) => {
    return {errors:[{code:codeR,message: messageR}]};
};
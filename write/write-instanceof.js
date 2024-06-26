function myInstanceOf(obj, Constructor) {
    let proto = obj.__proto__;

    while(true) {
        if (proto === Constructor.prototype) {
            return true;
        } else if (proto === null) {
            return false;
        } else {
            proto = proto.__proto__;
        }
    }
}
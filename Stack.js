function node(value, noderef) {
    this.value = value;
    this.next = noderef;
}
function stack() {
    this.push = function (value) {
        this.next = this.first;
        this.first = new node(value, this.next);
    }
    this.pop = function () {
        var popvalue = this.first.value;
        this.first = this.first.next;
        return popvalue;
    }
    this.hasnext = function () {
        return this.next != undefined;
    }
    this.isempty = function () {
        return this.first == undefined;
    }
    this.getValues = function() {
        var curr = this.first;
         while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }

}

var stk = new stack();
stk.push(2);

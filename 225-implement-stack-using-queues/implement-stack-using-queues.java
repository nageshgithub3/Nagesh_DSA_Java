class MyStack {
    private Queue<Integer>q1;   
    private Queue<Integer>q2;

    public MyStack() {
        q1=new LinkedList<>();
        q2=new LinkedList<>();
        
    }
    
    public void push(int x) {
        q1.add(x);
        
    }
    
    public int pop() {

        if(q1.isEmpty()) return -1;

        int n = q1.size();
        for(int i=0;i<n-1;i++){
            q2.add(q1.remove());
        }
        int ans = q1.remove();
        
        Queue<Integer> temp =q1;
        q1=q2;
        q2=temp;
        return ans;
        
    }
    
    public int top() {
        if(q1.isEmpty()){
            return -1;
        }

        int n = q1.size();

        for(int i=0;i<n-1;i++){
            q2.add(q1.remove());
        }

        int front = q1.remove();

        q2.add(front);

        Queue<Integer> temp =q1;
        q1=q2;
        q2=temp;

        return front;
    }
    
    public boolean empty() {
        return q1.size() == 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
/**
 * 图:顶点和边的实现;
 * 采用邻接矩阵实现图;
 * 
 * 
 */
class mygraph {
    init(val){
        this.val = val;    // 顶点数目;
        this.edges = 0;
        this.adj = [];
        this.marked = [];
        for(var i = 0;i < val;i++){
            this.adj[i] = [];
            this.marked[i] = [];
        }
        this.edgeTo = [];
    }
    test(){
        console.log("ceshi");
    }
    addEdge(v,m){   // 添加边 ， 通过两个顶点实现;
        if(v == null || m == null) return false;
        if(v >= this.val || m >= this.val)  console.log("超出范围!"); return false;
        this.adj[v].push(m);
        this.adj[m].push(v);
        this.edges++;
    }
    show(){
        // 显示图;
        for(var i = 0;i < this.val;i++){
            var edges = "";
            for(var j = 0;j < this.val;j++){
                if(this.adj[i][j]){
                    edges += this.adj[i][j];
                }
            }
            console.log(i + "->"+ edges);
        }
    }
    DFS(v){
        //深度优先搜索实现;
        this.marked[v] = true;
        if(this.marked[v] !== undefined){
            return false;
        }
        for( var i in this.adj[v]){
            var current = this.adj[v][i];
            if(!this.marked[current]){
                this.DFS(current);
            }
        }
    }
    
    BFS(v){
        var queue = [];
        this.marked[v] = true;
        queue.push(v);   // 使用队列存储节点; 
        while(queue.length > 0){
            var s = queue.shift();
            if( s !== undefined ){
                console.log(s + "该节点被访问了");
            }
            for(var w in this.adj[s]){
                var current = this.adj[s][w];
                if(!this.marked[current]){
                    queue.push(current);
                    this.marked[current] = true;
                    this.edgeTo[current] = s; // 连接两个点的所有边;
                }
            }
        }
        
    }

    hasPathTo(v){ // 是否有路径;
        return this.marked[v];  
    }

}

module.exports = mygraph;

const points = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export function whoIsWinner(squares) {
    for (let i = 0; i < points.length; i++){
        const [x, y, z] = points[i];
        if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
            return { winner: squares[x],point:points[i]};
        }
    }
    return null;
}
export function calcBestRoute(squares,role) {
    const roleCount = (arr => {
        let count = 0;
        arr.forEach(i => {
            if (squares[i] === role) {
                count += 1;
            }
        })
    })
    const sortedPoints = points.sort((a, b) => {
        const aCount = roleCount(a);  
        const bCount = roleCount(b);
        return bCount - aCount
    })
    for (let i = 0; i < sortedPoints.length; i++){
        let value = sortedPoints[i].find(elem => {
            if (squares[elem] === "") {
                return elem + "";
            }
            return null;            
        })
        if (!value) {
            continue
        }
        else
            return +value ;
        
    }
    return null;
}
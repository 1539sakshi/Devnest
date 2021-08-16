class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        for(int i=0;i<matrix.size();i++)
        {
            for(int j=i;j<matrix.size();j++)
            {
                    int temp=matrix[i][j];
                    matrix[i][j]=matrix[j][i];
                    matrix[j][i]=temp;
            }
        }
        for(int i=0;i<matrix.size();i++)
        {
            reverse(matrix[i].begin(),matrix[i].end());
            
            
            
//             int n =matrix.size();
//           int li=0;
//           int ri=n-1;
//         while(li<ri){
          
//           int t = matrix[i][li];
//           matrix[i][li]=matrix[i][ri];
//           matrix[i][ri]=t;
          
        
//           li++;
//           ri--;   
//         }
    
            
            
            
        }
    }
};
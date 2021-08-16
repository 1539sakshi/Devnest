class Solution 
{
public:
    int threeSumClosest(vector<int>& nums, int target) 
    {
        int n=nums.size();
        int out;
        int min =INT_MAX;
        int sum;
        sort(nums.begin(), nums.end());
        for(int i=0;i<n-2;i++){
            if(i==0 || nums[i]!=nums[i-1]){
                int l=i+1;
                int r=n-1;
               while(l<r){
                   sum = nums[i]+nums[l]+nums[r];
                   if(sum == target){
                       return sum;
                   }
                   else if(sum<target){
                       l++;
                   }
                   else{
                       r--;
                   }
                   if(abs(sum-target)<min){
                       out = sum;
                       min = abs(sum-target);
                   }
               }
            }
        }
        return out;
    }
};
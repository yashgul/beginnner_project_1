#include <stdio.h>//had already attempted and correctly solved this from code chef so just copy pasted also used to use c then
int main()
{
    int t;
    scanf("%d",&t);
    for(int l=0;l<t;l++)
    {
        int d;
        int k;
        int n;
        int sum=0;
        scanf("%d",&n);
        scanf("%d",&k);
        scanf("%d",&d);

        int arr[10000000];

        for(int h=0;h<n;h++)
        {
            scanf("%d",&arr[h]);
            sum=sum+arr[h];


        }
        int j=sum/k;
        if(j>d)
        j=d;

        printf("%d",j);
        printf("\n");





    }
}

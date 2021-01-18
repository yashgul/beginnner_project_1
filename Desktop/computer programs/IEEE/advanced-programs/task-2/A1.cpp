#include <stdio.h>
#include<algorithm>
#include <vector>
#include<iostream>
#include <math.h>
using namespace std;
int main()
{
    int n;
   cin>>n;
int k;
    vector<int> v(n);
    for(k=0;k<n;k++)
    {
        cin>>v[k];
    }
      sort(v.begin(), v.end());
      while(k>0)
      {

        int x=sqrt(v[k-1]);
        int r=x*x;

      if(v[k-1]!=r||v[k-1]<0)
      {
        cout<<v[k-1];
        break;

      }
      k--;

      }
}











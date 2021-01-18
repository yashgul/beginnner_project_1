#include <stdio.h>
#include<algorithm>
#include <vector>
#include<iostream>
#include <math.h>
using namespace std;
int main()
{
    int n,k,w;
   cin>>k>>n>>w;
   int req=w*(w+1)*k;
   req=req/2;

   if(req<=n)
    cout<<"0";
   else
   {
       cout<<req-n;

   }
}




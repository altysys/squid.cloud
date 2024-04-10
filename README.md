# squid.cloud
sample application using squid.cloud similar to https://github.com/squidcloudio/squid-samples
each example demonstrates a different aspect of squid.cloud offering 

Inventory_App_Angular : demonstration of squid.cloud using angular as fronend for more details see https://github.com/altysys/squid.cloud/blob/main/Inventory_App_Angular/Readme
React_API_Integration : demonstration of squid.cloud using react fronedn for more details see https://github.com/altysys/squid.cloud/blob/main/React_API_Integration/README.md


Queries/Challenges:
- How do we manage parent-child relationships in a relational database?  with SQUID we have to add parent first, then child, which results in an additional round trip to DB, with EF we can avoid this. As of now with SQUID we have to use store procedure to achieve this in single save/round trip.
- For simple use case, we can bypass writing API, and directly work with SDK from the frontend, which speeds up the development
- For complex project, we need to see if writing API can be avoided
- We have not noticed any performance issues while working with SQUID, though there is additional abstraction layer introduced by SQUID

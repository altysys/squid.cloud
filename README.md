# squid.cloud
sample application using squid.cloud similar to https://github.com/squidcloudio/squid-samples, each example demonstrates a different aspect/use case of squid.cloud offering 

# Inventory_App_Angular
Demonstration of squid.cloud using angular as the frontend for more details [see](https://github.com/altysys/squid.cloud/blob/main/Inventory_App_Angular/Readme)
# React_API_Integration 
Demonstration of squid.cloud using react frontend for more details [see](https://github.com/altysys/squid.cloud/blob/main/React_API_Integration/README.md)

# squid-chatbot
- Created a basic chatbot functionality using Squid Cloud.
- We have options to use any llm of our choice like GPT-3.5/Gemini.
- Connected our response mechanism with Squid storage and S3 bucket.
- We can also get accurate responses by passing context as raw text/URL/pdf in our squid chatbot. 
- Deployed the code on Squid.cloud.

# Observation
- For a simple use case, we can bypass writing API and directly work with SDK from the frontend as demonstrated in [first project](https://github.com/altysys/squid.cloud/tree/main/Inventory_App_Angular), which speeds up the development
- For complex projects, we need to see if writing API can be avoided, as the amount of logic is non trivial, not sure if that can be tackled on frontend
- Though there is an additional abstraction layer introduced by SQUID, one would expect performance degradation due to this but, We have not noticed any performance issue

# Queries/Challenges:
- How do we manage parent-child relationships in a relational database? with SQUID we have to add parent first, then child, which results in an additional round trip to DB, with EF(entity framework) we can avoid this. As of now with SQUID we have to use store procedure to achieve this in a single save/round trip


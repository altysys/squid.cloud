# squid.cloud
sample application using squid.cloud similar to https://github.com/squidcloudio/squid-samples
each example demonstrates a different aspect of squid.cloud offering 


Queries/Challenges:
- How do we manage parent-child relationships in a relational database?  with SQUID we have to add parent first, then child, which results in an additional round trip to DB, with EF we can avoid this. As of now with SQUID we have to use store procedure to achieve this in single save/round trip.

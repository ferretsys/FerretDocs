# Managing networks on your server
When your server is running you should see in a run directory (`src/run`), there is a `networks.json` file, a networks file with a network will look something like this:
```json
{
    "myfirstnetwork": {
        "token": "J1UtFI0mpMGXs6Z8ZH0yImJ5oN2b5keFPnIGCosqbKmHGw0GGY"
    }
}
```
To create a random valid token use `python gentoken.py`, (note to self: i should make this not need python and rewrite in nodejs).
You can create your own token generator as long as the generated token is:
 - Exactly 50 chars long
 - Only containes upper and lowercase alphabhet with numbers, internal charset is (`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`)
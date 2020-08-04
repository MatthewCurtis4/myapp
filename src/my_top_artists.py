# Shows the top artists for a user
import spotipy
from spotipy.oauth2 import SpotifyOAuth

import './App.css'
import './App.js'

spotifyApi = SpotifyWebApi()

scope = 'user-top-read'
ranges = ['short_term', 'medium_term', 'long_term']



for sp_range in ['short_term', 'medium_term', 'long_term']:
    print("range:", sp_range)

    results = sp.current_user_top_artists(time_range=sp_range, limit=50)

    for i, item in enumerate(results['items']):
        print(i, item['name'])
    print()

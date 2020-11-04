var express = require('express');
var router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: '63c9dd7d86144239971ceacbe077d1d8',
    clientSecret: '3235ae02a03b4078953dc337aef00983'
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
    function (data) {
        console.log('The access token expires in ' + data.body.access_token);
        console.log('The access token is ' + data.body.access_token);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body.access_token);
    },
    function (err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
    }
);

router.get('/', function (req, res) {
    spotifyApi.getAlbums(['11YJfivZjEaEUU9lJmeidh', '562QL0VsewtzIfdVf6nUZ6',
            '60IcFwRDlDyAdslSPOxSkA', '0bnW7u1tYEpqDinuDvEzaD',
            '0ajbKuAGjGt7VBJeKpYyu8', '7LF4N7lvyDhrPBuCJ1rplJ',
            '7JOCOjZTcLysDMkZGWlcIj', '7JagxcyBE97hAtTyBvVFnh', '5CL7DxnlCig1ahTBgxWf2h'
        ],
        function (err, data) {
            if (err) throw err;
            var firstAlbumImage = data.body.albums[0].images[0].url;
            var secondAlbumImage = data.body.albums[1].images[0].url;
            var thirdAlbumImage = data.body.albums[2].images[0].url;
            var fourthAlbumImage = data.body.albums[3].images[0].url;
            var fifthAlbumImage = data.body.albums[4].images[0].url;
            var sixthAlbumImage = data.body.albums[5].images[0].url;
            var seventhAlbumImage = data.body.albums[6].images[0].url;
            var eigthAlbumImage = data.body.albums[7].images[0].url;
            var ninthAlbumImage = data.body.albums[8].images[0].url;
            var firstAlbumName = data.body.albums[0].name;
            var secondAlbumName = data.body.albums[1].name;
            var thirdAlbumName = data.body.albums[2].name;
            var fourthAlbumName = data.body.albums[3].name;
            var fifthAlbumName = data.body.albums[4].name;
            var sixthAlbumName = data.body.albums[5].name;
            var seventhAlbumName = data.body.albums[6].name;
            var eigthAlbumName = data.body.albums[7].name;
            var ninthAlbumName = data.body.albums[8].name;

            // get tracks in first album
            spotifyApi.getAlbumTracks('11YJfivZjEaEUU9lJmeidh', {
                limit: 1,
                offset: 0
            }, function (err, data) {
                if (err) throw err;
                var resultOne = data.body.items[0];
                // Get tracks in second album
                spotifyApi.getAlbumTracks('562QL0VsewtzIfdVf6nUZ6', {
                        limit: 1,
                        offset:0
                    }, function (err, data) {
                    if (err) throw err;
                    var resultTwo = data.body.items[0];
                    // Get tracks in third album
                    spotifyApi.getAlbumTracks('60IcFwRDlDyAdslSPOxSkA', {
                            limit: 1,
                            offset: 5
                        }, function (err, data) {
                            if (err) throw err;
                            var resultThree = data.body.items[0];
                            // Get tracks in fourth album
                            spotifyApi.getAlbumTracks('0bnW7u1tYEpqDinuDvEzaD', {
                                limit: 1,
                                offset: 0
                                }, function (err, data) {
                                    if (err) throw err;
                                    var resultFour = data.body.items[0];
                                    // Get tracks in fifth album
                                     spotifyApi.getAlbumTracks('0ajbKuAGjGt7VBJeKpYyu8', {
                                                 limit: 1,
                                                 offset: 0
                                             }, function (err, data) {
                                                 if (err) throw err;
                                                 var resultFive = data.body.items[0];
                                                 // Get tracks in sixth album
                                                 spotifyApi.getAlbumTracks('7LF4N7lvyDhrPBuCJ1rplJ', {
                                                     limit: 1,
                                                     offset: 1
                                                 }, function (err, data) {
                                                     if (err) throw err;
                                                     var resultSix = data.body.items[0];
                                                     // Get tracks in Seventh album
                                                     spotifyApi.getAlbumTracks('7JOCOjZTcLysDMkZGWlcIj', {
                                                         limit: 2,
                                                         offset: 1
                                                     }, function (err, data) {
                                                         if (err) throw err;
                                                         var resultSeven = data.body.items[1];
                                                         // Get tracks in eigth album
                                                         spotifyApi.getAlbumTracks('7JagxcyBE97hAtTyBvVFnh', {
                                                             limit: 1,
                                                             offset: 0
                                                         }, function (err, data) {
                                                             if (err) throw err;
                                                             var resultEigth = data.body.items[0];
                                                             // Get tracks in ninth album
                                                             spotifyApi.getAlbumTracks('5CL7DxnlCig1ahTBgxWf2h', {
                                                                 limit: 1,
                                                                 offset: 0
                                                             }, function (err, data) {
                                                                 if (err) throw err;
                                                                 var resultNine = data.body.items[0];
                                                                  res.render('index', {
                                                                      title: 'Musify',
                                                                      style: 'index.css',
                                                                      script: 'addToPlay.js',
                                                                      firstAlbumImage: firstAlbumImage,
                                                                      secondAlbumImage: secondAlbumImage,
                                                                      thirdAlbumImage: thirdAlbumImage,
                                                                      fourthAlbumImage: fourthAlbumImage,
                                                                      fifthAlbumImage: fifthAlbumImage,
                                                                      sixthAlbumImage: sixthAlbumImage,
                                                                      seventhAlbumImage: seventhAlbumImage,
                                                                      eigthAlbumImage: eigthAlbumImage,
                                                                      ninthAlbumImage: ninthAlbumImage,
                                                                      firstAlbumName: firstAlbumName,
                                                                      secondAlbumName: secondAlbumName,
                                                                      thirdAlbumName: thirdAlbumName,
                                                                      fourthAlbumName: fourthAlbumName,
                                                                      fifthAlbumName: fifthAlbumName,
                                                                      sixthAlbumName: sixthAlbumName,
                                                                      seventhAlbumName: seventhAlbumName,
                                                                      eigthAlbumName: eigthAlbumName,
                                                                      ninthAlbumName: ninthAlbumName,
                                                                      audioOne: resultOne,
                                                                      audioTwo: resultTwo,
                                                                      audioThree: resultThree,
                                                                      audioFour: resultFour,
                                                                      audioFive: resultFive,
                                                                      audioSix: resultSix,
                                                                      audioSeven: resultSeven,
                                                                      audioEigth: resultEigth,
                                                                      audioNine: resultNine,
                                                                      user: req.session.user,
                                                                      username: req.session.username
                                                                  });


                                                             });


                                                         });


                                                     });


                                                 });
                                                
                                                
                                                });
                                    

                                   
                            });
                        });
                    });
            });
    });
});

router.get('/search/:data', function (req, res) {
    console.log('search word' + req.params.data);
    spotifyApi.searchTracks(req.params.data)
        .then(function (data) {
            res.send(data.body.tracks.items);
        }, function (err) {
            console.error(err);
        });
});

module.exports = router;
const spots = [
    {
        name: 'Mcgill University',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5027235,-73.5756968,3a,75y,259.41h,101.02t/data=!3m6!1e1!3m4!1swK8axYFk5hy4_pwh-oqyZQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Viger Square Curved Hubba',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5131734,-73.5538924,3a,37.8y,9.22h,84.81t/data=!3m6!1e1!3m4!1sDVyy4TrXdm-mpK43Ti69Zg!2e0!7i16384!8i8192',
    },
    {
        name: 'Viger Square Triangle Ledge',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5098271,-73.5571839,3a,23y,73.95h,82.66t/data=!3m6!1e1!3m4!1sZ6LJ1iVBSYrK69ZECK2_IQ!2e0!7i16384!8i8192',
    },
    {
        name: `Dunn's Alley`,
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.500489,-73.5717463,3a,75y,46.72h,89.82t/data=!3m6!1e1!3m4!1sqsVUiD5C7bOX7rSwhFjZ0g!2e0!7i16384!8i8192',
    },
    {
        name: `Place D'armes Plaza`,
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.503608,-73.5619398,3a,61.5y,103.39h,88.63t/data=!3m6!1e1!3m4!1sd35f_ywGcIcz_HymJEgOjg!2e0!7i16384!8i8192',
    },
    {
        name: 'Square Victoria',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5014899,-73.5618095,3a,75y,116.91h,83.03t/data=!3m7!1e1!3m5!1syM2eRPk4WCvWz9Quo9jCiA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DyM2eRPk4WCvWz9Quo9jCiA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D80.18109%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
    },
    {
        name: 'Bank To Ledge',
        borough: 'Downtown',
        link: 'https://www.google.ca/maps/@45.5023263,-73.5650259,3a,27.3y,138.27h,79.93t/data=!3m7!1e1!3m5!1s7pdQSkC9ymCTvnLIXc9lvA!2e0!5s20190801T000000!7i13312!8i6656',
    },
    {
        name: 'Peace Park',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5095687,-73.5623597,3a,90y,113.92h,74.98t/data=!3m7!1e1!3m5!1sjcwgJiDkZiHOrbw3JVbkdw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DjcwgJiDkZiHOrbw3JVbkdw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D161.7323%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
    },
    {
        name: 'Mcgill Ledges',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5048194,-73.5731588,3a,75y,181.84h,72.33t/data=!3m6!1e1!3m4!1sy7x5C2vHa0EViG6fIR21Dg!2e0!7i16384!8i8192',
    },
    {
        name: 'Maisonneuve Bump To Bar',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5064354,-73.569616,3a,70.7y,293.35h,86.05t/data=!3m6!1e1!3m4!1srEzFu0xQUVKYe2CapCDrHw!2e0!7i16384!8i8192',
    },
    {
        name: 'Place Des Arts Benches',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/place/%C3%8Elot+Balmoral/@45.5081555,-73.5683591,3a,75y,139.61h,85.11t/data=!3m6!1e1!3m4!1sbtNELtHCAmjxwk3XZsz5Bw!2e0!7i16384!8i8192!4m5!3m4!1s0x4cc91a4f3f255fff:0xe8e594d4bfc24457!8m2!3d45.507187!4d-73.5685336',
    },
    {
        name: 'Rene Levesque Flatbar',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5075073,-73.5626034,3a,75y,131.56h,82.57t/data=!3m6!1e1!3m4!1sSkrF6gmah7qkMG6NsvXilg!2e0!7i16384!8i8192',
    },
    {
        name: 'Chinatown Curved Ledge',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5061563,-73.5611031,3a,15y,9.44h,83.93t/data=!3m6!1e1!3m4!1sVB5hlqamD-cYwP4gg36VOw!2e0!7i16384!8i8192',
    },
    {
        name: 'Chinatown Plaza',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5077804,-73.5604901,3a,75y,18.51h,77.66t/data=!3m6!1e1!3m4!1sf2ErLipb9Xi3DXWlAVxydA!2e0!7i16384!8i8192',
    },
    {
        name: 'Palais Justice Ledges',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5066619,-73.5553759,3a,55.1y,251.72h,85.13t/data=!3m6!1e1!3m4!1sHO4OKznJLwSJ_8iQc1yGtQ!2e0!7i16384!8i8192',
    },
    {
        name: 'I-Beam Ledges On The Water',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.4987018,-73.5524928,2a,33y,86.04h,84.66t/data=!3m6!1e1!3m4!1s4RoYIxBDZKV2zdVCesZFzA!2e0!7i13312!8i6656',
    },
    {
        name: 'Peel Park',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.4990778,-73.570168,3a,75y,294.35h,85.66t/data=!3m6!1e1!3m4!1sIHyWJasurmRbosNKBV14ww!2e0!7i16384!8i8192',
    },
    {
        name: 'Chinatown Rail, Stairs and Ledge Plaza',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/place/Wing+Noodles+Ltd.+%7C+Noodles+Ltd.+Wing./@45.5061553,-73.5615239,3a,75y,182.84h,88.51t/data=!3m6!1e1!3m4!1seAzoqaN0IuEWqtdrGERF6g!2e0!7i16384!8i8192!4m5!3m4!1s0x4cc91a5043cfec6b:0xc03a655ef3f86f31!8m2!3d45.50627!4d-73.561153',
    },
    {
        name: 'Concordia Benches and Mini Flatbars',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.4960931,-73.5792852,3a,17.9y,94.99h,82.38t/data=!3m6!1e1!3m4!1s3UnXIlxxxlGO66k4vWq1nQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Flatbars and Gap to Street',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.505761,-73.5704032,3a,62.8y,1.18h,92.29t/data=!3m6!1e1!3m4!1sdTojE2VKgh7veOqxqzDzog!2e0!7i16384!8i8192',
    },
    {
        name: 'PAC',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5030812,-73.5541849,3a,75y,0.35h,80.73t/data=!3m6!1e1!3m4!1sPsaCILJg76ZB98n687I19A!2e0!7i16384!8i8192',
    },
    {
        name: 'Berri Library Ledges',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.516512,-73.5639176,3a,32.9y,188.78h,88.75t/data=!3m6!1e1!3m4!1slounIZfpWJ5uPZ_g5M4liw!2e0!7i16384!8i8192',
    },
    {
        name: 'Berri Banks',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.517047,-73.5648858,3a,75y,277.37h,104.14t/data=!3m7!1e1!3m5!1sbCHDWxQIaH7uT8rj3WLcXw!2e0!5s20170801T000000!7i13312!8i6656',
    },
    {
        name: 'CEGEP Vieux Montreal',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5146487,-73.5656973,3a,75y,287.85h,83.99t/data=!3m6!1e1!3m4!1s8d84X3UUDHANmcw2w3i3uQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Place Ville Marie',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.500955,-73.5683858,3a,75y,272.01h,100.95t/data=!3m6!1e1!3m4!1sd_vPo207LDrTfsW3BgK3SA!2e0!7i16384!8i8192',
    },
    {
        name: 'Old Port Black Ledges',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5041303,-73.5579616,3a,75y,55.37h,85.14t/data=!3m6!1e1!3m4!1sIAL6SmvA_2ZVlMvOz0PJ_Q!2e0!7i16384!8i8192',
    },
    {
        name: 'Bank to Curb In Alley',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5015854,-73.5569292,3a,75y,127.38h,87.83t/data=!3m6!1e1!3m4!1sYz79HJqXtduemlw6YM50gA!2e0!7i16384!8i8192',
    },
    {
        name: 'Mcgill Mud Ledge',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5065336,-73.5731817,3a,75y,217.49h,86.16t/data=!3m6!1e1!3m4!1sYdmHfMe7ucWGkqwNkL0a9Q!2e0!7i16384!8i8192',
    },
    {
        name: 'Rachel Hubba, Out Ledge, 3-Set and Wallie',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5186472,-73.5815754,3a,75y,220.03h,90.86t/data=!3m6!1e1!3m4!1s6lqQwV_9teCHMVQ4i-kAtQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Cinema Du Parc Out Ledge',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5106472,-73.5755145,3a,75y,309.79h,89.58t/data=!3m6!1e1!3m4!1s8JzqEthPVn2QRSBiS2f5_w!2e0!7i16384!8i8192',
    },
    {
        name: 'Prince Arthur Small Out Ledge',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5101366,-73.5759888,3a,75y,277.31h,84.99t/data=!3m6!1e1!3m4!1sklo3x32glitWaXMFqBjfqw!2e0!7i16384!8i8192',
    },
    {
        name: 'Milton Grass Gap Ledge',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5114956,-73.5716171,3a,39.5y,168.09h,85.98t/data=!3m6!1e1!3m4!1sZXvidWS6UUDw4QBFAaGjQg!2e0!7i16384!8i8192',
    },
    {
        name: 'Henri Julien Wooden Manny Pad',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5180682,-73.5731972,3a,75y,22.43h,90.42t/data=!3m7!1e1!3m5!1se5_sRVdv642FUIKPU-m5Sw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3De5_sRVdv642FUIKPU-m5Sw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D159.4054%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
    },
    {
        name: 'Parc Lafontaine',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5261457,-73.5644913,3a,75y,270.39h,95.89t/data=!3m6!1e1!3m4!1s5nZrOqLXyVp5lYrvB7Ti5w!2e0!7i16384!8i8192',
    },
    {
        name: 'Windowsill Ledge',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5182652,-73.5807384,3a,37.8y,343.51h,84.88t/data=!3m6!1e1!3m4!1sYSEph5rpzDrQfCElIWIJ1A!2e0!7i16384!8i8192',
    },
    {
        name: 'Rachel 8-Stair',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5210469,-73.5788919,3a,75y,291.88h,90.73t/data=!3m6!1e1!3m4!1sLlNjigfkr8ZZ2A6yKL9HkQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Mcgill Mini Quarter Planters',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5035158,-73.5742235,3a,75y,311.87h,83.84t/data=!3m7!1e1!3m5!1spj9kSe1xtQi99v6mfL-DNQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dpj9kSe1xtQi99v6mfL-DNQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D308.66098%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
    },
    {
        name: 'Mount Royal Lookout',
        borough: 'Downtown',
        link: 'https://www.google.com/maps/@45.5035253,-73.5863308,3a,75y,277.86h,104.97t/data=!3m8!1e1!3m6!1sAF1QipMT_dNEfxAmXgqYbD8HVr1UEX-hob8M1EatUn07!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMT_dNEfxAmXgqYbD8HVr1UEX-hob8M1EatUn07%3Dw203-h100-k-no-pi0-ya338.45313-ro-0-fo100!7i8704!8i4352',
    },
    {
        name: 'Casgrain Gap to Curb',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5257838,-73.5946976,3a,75y,296.88h,78.54t/data=!3m6!1e1!3m4!1s-SgcrLvWQTE4Y8x-KmPkBw!2e0!7i16384!8i8192',
    },
    {
        name: 'Flatbar to Big Bank Gap',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5249656,-73.5954252,3a,33.8y,157.24h,83.16t/data=!3m6!1e1!3m4!1sZiAKAKL0LkhmynwuXD-l-w!2e0!7i16384!8i8192',
    },
    {
        name: 'Dr. Penfield Ledge to Hill Bomb',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5051762,-73.5809327,3a,75y,104.05h,77.02t/data=!3m6!1e1!3m4!1sSA3kuB6vVFnVW374Oa6iKg!2e0!7i16384!8i8192',
    },
    {
        name: 'Sherbrooke 7-Stair Handrail',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5155889,-73.5681172,3a,75y,280.66h,89.94t/data=!3m7!1e1!3m5!1saC0aD3ZUEvRjU_echQhWNA!2e0!5s20200901T000000!7i16384!8i8192',
    },
    {
        name: 'Out Ledge Hospital',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5131946,-73.5765561,3a,28.9y,287.98h,89.8t/data=!3m7!1e1!3m5!1st4mKc8J6QoDIYf20f06-aQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dt4mKc8J6QoDIYf20f06-aQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D16.235888%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
    },
    {
        name: 'Jeanne Mance Statue Out Ledges',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5140813,-73.5849744,2a,75y,324.15h,92.9t/data=!3m6!1e1!3m4!1sbHUX2lDMmjC0ldI4mJ4ZUQ!2e0!7i13312!8i6656',
    },
    {
        name: '3-Set Flat Bar and Manny Spot',
        borough: 'Village',
        link: 'https://www.google.ca/maps/@45.5179491,-73.5615146,3a,75y,359.58h,82.27t/data=!3m7!1e1!3m5!1stEicMi7H19OdNVAcbo4NIw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DtEicMi7H19OdNVAcbo4NIw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D87.34483%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
    },
    {
        name: 'Bump To Bar Papineau',
        borough: 'Village',
        link: 'https://www.google.com/maps/@45.5275438,-73.5629765,3a,47.1y,5.61h,87.01t/data=!3m6!1e1!3m4!1s_pdDjsEP0-lZyVHSzTYI0w!2e0!7i16384!8i8192',
    },
    {
        name: 'Village Ledge Spot',
        borough: 'Village',
        link: 'https://www.google.com/maps/@45.5348064,-73.5554728,3a,75y,23.96h,75.19t/data=!3m6!1e1!3m4!1spzITSKW74cUsFQrELqi2Cw!2e0!7i16384!8i8192',
    },
    {
        name: 'Black Marble Ledges',
        borough: 'Village',
        link: 'https://www.google.com/maps/@45.5197736,-73.5550196,3a,53.1y,141.94h,85.43t/data=!3m7!1e1!3m5!1sAF1QipM92BmEi-kMDDZuK2HU1jqr-xC2B8zDL6hg-MEn!2e10!5s20190801T000000!7i5760!8i2880',
    },
    {
        name: 'Curved Ledge',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.ca/maps/@45.5482527,-73.6195547,3a,67.4y,265.49h,77.79t/data=!3m6!1e1!3m4!1sE4UOI0E8z56Mq3-htKzmuA!2e0!7i16384!8i8192',
    },
    {
        name: 'Downhill Slappy and Jersey Barrier',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.ca/maps/place/Villeray+%2F+Chambord/@45.5474652,-73.6186867,3a,18.9y,334.74h,81.22t/data=!3m6!1e1!3m4!1sKw34LuOZooFKj_hMA6V3uQ!2e0!7i16384!8i8192!4m5!3m4!1s0x4cc9193b41da7d69:0x6e299e53de261ad9!8m2!3d45.548052!4d-73.617666',
    },
    {
        name: 'Parc Normanville',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.com/maps/@45.5454674,-73.6163121,3a,75y,70.93h,91.64t/data=!3m6!1e1!3m4!1swtHmjuKImr7LAulOMXfC0g!2e0!7i16384!8i8192',
    },
    {
        name: 'Small Manny Levels SQDC',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.ca/maps/@45.5326269,-73.6555471,3a,40.2y,257.22h,86.17t/data=!3m6!1e1!3m4!1sBJweFh3oHIex_1NiMMp0jw!2e0!7i16384!8i8192',
    },
    {
        name: 'Da Bumps',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.ca/maps/@45.5544981,-73.5733636,3a,75y,6.84h,75.16t/data=!3m6!1e1!3m4!1s3pixLrXAXJFpcQcLC46baw!2e0!7i16384!8i8192',
    },
    {
        name: 'Des Erables Schoolyard',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.com/maps/@45.5334902,-73.5669902,3a,75y,0.51h,85.91t/data=!3m6!1e1!3m4!1sZXvznyzOJ7xPPu3gIPTM7g!2e0!7i16384!8i8192',
    },
    {
        name: 'Bank to Ledge Schoolyard',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.com/maps/@45.5334902,-73.5669902,3a,75y,0.51h,85.91t/data=!3m6!1e1!3m4!1sZXvznyzOJ7xPPu3gIPTM7g!2e0!7i16384!8i8192',
    },
    {
        name: 'Rosemont Gap to Sidewalk',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.com/maps/@45.5498872,-73.58316,3a,41.7y,55.61h,81.25t/data=!3m6!1e1!3m4!1sD1EJdoorXFOUmftv5rNOLg!2e0!7i16384!8i8192',
    },
    {
        name: 'Bump to Bar',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.ca/maps/@45.5473645,-73.5978202,3a,25.7y,264.53h,78.25t/data=!3m6!1e1!3m4!1su9y0TEGF24WaKrpLtlngLg!2e0!7i16384!8i8192',
    },
    {
        name: 'Bank to Flat Bar and Bank to Ledge',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.ca/maps/@45.5490992,-73.596318,3a,46.9y,294.8h,77.96t/data=!3m6!1e1!3m4!1sGtm3c5NPAvIDfraed2P1fQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Handrail and Banks',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.ca/maps/@45.5640358,-73.5736862,3a,33.5y,155.46h,85.62t/data=!3m6!1e1!3m4!1sTJWz85uUVNqeBhN-i4IZSw!2e0!7i16384!8i8192',
    },
    {
        name: 'Ledges Ledges Ledges',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.com/maps/@45.5505342,-73.6249337,3a,75y,283.73h,81.95t/data=!3m6!1e1!3m4!1scNBq5ZznRMjgCwzmDUBT3Q!2e0!7i16384!8i8192',
    },
    {
        name: 'Long Downhill Flatbars',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.com/maps/@45.4895606,-73.5751265,3a,75y,355.65h,78.11t/data=!3m6!1e1!3m4!1sE_z0HqQVY8KsjnnHL901kg!2e0!7i16384!8i8192',
    },
    {
        name: 'Rosemont Apartment Hubba',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.com/maps/@45.5594957,-73.5750385,3a,89.9y,325.19h,94.27t/data=!3m6!1e1!3m4!1sOX4YiWFflRcrP_b3h2Zcyg!2e0!7i16384!8i8192',
    },
    {
        name: 'Villeray Schoolyard Ledges and Curbs',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.com/maps/@45.5459905,-73.6198229,3a,40.6y,213.9h,90.38t/data=!3m7!1e1!3m5!1sDasxNw8X0eVcwy5_xeTC4Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DDasxNw8X0eVcwy5_xeTC4Q%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D231.87947%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
    },
    {
        name: 'Gap to Rail',
        borough: 'Rosemont/Villeray',
        link: 'https://www.google.com/maps/@45.5566294,-73.5994068,3a,36.2y,118.25h,82.42t/data=!3m7!1e1!3m5!1sUXiYAmgHb3WlLjMvub1_Fw!2e0!5s20170601T000000!7i13312!8i6656',
    },
    {
        name: 'Big O',
        borough: 'Hochelaga',
        link: 'https://www.google.com/maps/@45.5538848,-73.5554285,3a,75y,2.41h,91.66t/data=!3m6!1e1!3m4!1sTpXp3LJ-00NlpTLN9lIlfA!2e0!7i16384!8i8192',
    },
    {
        name: 'Prefontaine Out Ledges',
        borough: 'Hochelaga',
        link: 'https://www.google.com/maps/@45.542767,-73.5531856,3a,15y,203.05h,84.83t/data=!3m6!1e1!3m4!1s0x6MGSiQ_wvr_VhtwCcvrQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Rail to Bank',
        borough: 'Hochelaga',
        link: 'https://www.google.com/maps/@45.5532812,-73.5519356,3a,31.2y,115.61h,80.43t/data=!3m6!1e1!3m4!1siklKx1XVSZJ97MXP8HzfYA!2e0!7i16384!8i8192',
    },
    {
        name: '3-Stair Out Rail',
        borough: 'Hochelaga',
        link: 'https://www.google.com/maps/@45.6399934,-73.4906841,3a,75y,225.08h,91.95t/data=!3m6!1e1!3m4!1sPnQ-KYyCcPAe75RNyr8cIg!2e0!7i16384!8i8192',
    },
    {
        name: 'Pop Over to Waxed Ledge',
        borough: 'Hochelaga',
        link: 'https://www.google.com/maps/@45.5299019,-73.5570739,3a,75y,173.07h,89.12t/data=!3m6!1e1!3m4!1sS5YaA4Z0jRfI2erSpxzkwQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Hubba Ride Off to Drop',
        borough: 'Hochelaga',
        link: 'https://www.google.com/maps/@45.5327191,-73.563074,3a,75y,209.88h,79.73t/data=!3m6!1e1!3m4!1sg5DvnSf6Mdma3TdUYU406w!2e0!7i16384!8i8192',
    },
    {
        name: 'G-Park',
        borough: 'NDG',
        link: 'https://www.google.com/maps/@45.4724259,-73.6138519,3a,75y,151.23h,78.74t/data=!3m6!1e1!3m4!1sAF1QipOT0Wi1THXGdEbQFDIAIsT4bPUWCpt09sUs1fMx!2e10!7i5376!8i2688',
    },
    {
        name: 'Westmount Kiddie Pool',
        borough: 'Westmount',
        link: 'https://www.google.com/maps/@45.4830423,-73.598794,3a,75y,100.29h,100.5t/data=!3m6!1e1!3m4!1sZgxbL89iJ96dqrqciLmaXg!2e0!7i16384!8i8192',
    },
    {
        name: 'Schoolyard Banks and Curved Ledges',
        borough: 'NDG',
        link: 'https://www.google.ca/maps/@45.4848427,-73.6238872,3a,82.2y,241.78h,81.81t/data=!3m6!1e1!3m4!1s4rkwXSIiJnHFvjPHFo25cw!2e0!7i16384!8i8192',
    },
    {
        name: 'Stairs Plaza',
        borough: 'Westmount',
        link: 'https://www.google.com/maps/@45.4881016,-73.5879453,3a,75y,193.9h,94.03t/data=!3m6!1e1!3m4!1sxGBIt9jflb4Ce_tiCqeiPg!2e0!7i16384!8i8192',
    },
    {
        name: 'Marble Wallie to Stairs',
        borough: 'Westmount',
        link: 'https://www.google.com/maps/@45.4865297,-73.5874683,3a,75y,319.94h,84.55t/data=!3m6!1e1!3m4!1sage8OvkF73GGNNhA8c6hLQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Long Bank to Drop',
        borough: 'Westmount',
        link: 'https://www.google.com/maps/@45.4894013,-73.5866302,3a,75y,159.12h,93.19t/data=!3m6!1e1!3m4!1s9hcx2uEOWQWKBhnCQ0dI9A!2e0!7i16384!8i8192',
    },
    {
        name: 'Loyola Campus Handrails and Blocks',
        borough: 'NDG',
        link: 'https://www.google.com/maps/@45.4586677,-73.6389911,3a,32.4y,173.34h,88.83t/data=!3m7!1e1!3m5!1sNK33K6iwHbTOlXn_bPi2mg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DNK33K6iwHbTOlXn_bPi2mg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D153.15573%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656',
    },
    {
        name: 'UDEM Curved Ledges and 2-Set',
        borough: 'Park-Extension',
        link: 'https://www.google.com/maps/@45.5236145,-73.623022,3a,75y,92.73h,88.58t/data=!3m6!1e1!3m4!1sRmSnY9UzcoslqfzSrRJ_VA!2e0!7i16384!8i8192',
    },
    {
        name: 'Acadie Hubba',
        borough: 'Park-Extension',
        link: 'https://www.google.com/maps/@45.5241053,-73.6254119,3a,75y,251.18h,83.2t/data=!3m6!1e1!3m4!1sFQtDJkq5xPkTpqECiU-bAQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Sun Youth Rail',
        borough: 'Park-Extension',
        link: 'https://www.google.com/maps/@45.5280229,-73.6166399,3a,75y,81.02h,78.05t/data=!3m6!1e1!3m4!1s1FJ3_uufnTK8yIvek25fbw!2e0!7i16384!8i8192',
    },
    {
        name: 'Parc St Viateur Long Rail and Mini Hubba',
        borough: 'Outremont',
        link: 'https://www.google.com/maps/@45.5202101,-73.6069412,3a,47.3y,23.65h,97.58t/data=!3m8!1e1!3m6!1sAF1QipNjkJ6Gax-gy87Pi6GzCF0LY4kuwg3P3YdQJVg-!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNjkJ6Gax-gy87Pi6GzCF0LY4kuwg3P3YdQJVg-%3Dw203-h100-k-no-pi0-ya318.98843-ro-0-fo100!7i6144!8i3072',
    },
    {
        name: 'Rockland Barrier and Manny Pad',
        borough: 'Park-Extension',
        link: 'https://www.google.com/maps/@45.5196075,-73.627367,3a,75y,153.37h,82.36t/data=!3m6!1e1!3m4!1syhNd9AG-YJy7vGPFqUUAsg!2e0!7i16384!8i8192',
    },
    {
        name: 'Ride On Grind and Small Grass Gap',
        borough: 'Park-Extension',
        link: 'https://www.google.com/maps/@45.5321099,-73.6231151,3a,15y,203.5h,91.38t/data=!3m6!1e1!3m4!1sh1lo_AAYRMMdXKve7tu5Hg!2e0!7i16384!8i8192',
    },
    {
        name: 'CHUM Building Banks',
        borough: 'Park-Extension',
        link: 'https://www.google.com/maps/@45.5312924,-73.6239306,3a,75y,258.34h,82.39t/data=!3m6!1e1!3m4!1soOpIEjBPrkIJTz3lu4ge5Q!2e0!7i16384!8i8192',
    },
    {
        name: 'Green Bench Ledges',
        borough: 'Park-Extension',
        link: 'https://www.google.com/maps/@45.5294288,-73.6289179,3a,75y,183.68h,81.29t/data=!3m6!1e1!3m4!1shMKbUaTo1Z9UtpKstEKZoQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Small Out Ledge',
        borough: 'Little Italy',
        link: 'https://www.google.com/maps/@45.5329042,-73.6015478,3a,24.5y,79.62h,87.07t/data=!3m6!1e1!3m4!1sbjoB5eET1TIDTr_wbwD6SA!2e0!7i16384!8i8192',
    },
    {
        name: 'Cirque Du Soleil Building Ledge',
        borough: 'Villeray',
        link: 'https://www.google.ca/maps/@45.5604733,-73.6148139,3a,75y,344.14h,73.98t/data=!3m6!1e1!3m4!1sGGRzsNJEAuqdkFzq7n1tRQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Curved Rail',
        borough: 'Saint-Leonard',
        link: 'https://www.google.com/maps/@45.5150927,-73.6780711,3a,29.9y,2.73h,77.89t/data=!3m6!1e1!3m4!1sBZVILRiqXnK35kxboHp1Hg!2e0!7i16384!8i8192',
    },
    {
        name: 'Ride On Flat Bar',
        borough: 'Montreal-Nord',
        link: 'https://www.google.com/maps/@45.595829,-73.6330806,3a,75y,125.76h,71.09t/data=!3m6!1e1!3m4!1s7eU378s8qmFvDaz99Kdpyg!2e0!7i16384!8i8192',
    },
    {
        name: 'Handrail Filled Schoolyard',
        borough: 'Montreal-Nord',
        link: 'https://www.google.com/maps/@45.585728,-73.642766,3a,89.6y,73.31h,78.14t/data=!3m6!1e1!3m4!1sR3fW-ooDPUe7AsNdwjGpGg!2e0!7i16384!8i8192',
    },
    {
        name: 'Bank to Parking Curb',
        borough: 'Chabanel',
        link: 'https://www.google.ca/maps/@45.5376471,-73.6526502,3a,35.2y,184.61h,85.71t/data=!3m6!1e1!3m4!1sudwWquOENuIfYW-Wy8QKsQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Steep Bank At University',
        borough: 'Saint-Laurent',
        link: 'https://www.google.com/maps/@45.5144237,-73.6769138,3a,28.8y,17.08h,90t/data=!3m6!1e1!3m4!1sjSZc_NsYCuU1aNH7xJzKWQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Amos School Handrail to Bank',
        borough: 'Montreal-Nord',
        link: 'https://www.google.com/maps/@45.5863865,-73.6423094,3a,75y,223.5h,95.95t/data=!3m7!1e1!3m5!1sLgbvAGEz1Zsk6_e1q9paGg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DLgbvAGEz1Zsk6_e1q9paGg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D42.845863%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
    },
    {
        name: 'Curb to Chill Bank',
        borough: 'Montreal-Nord',
        link: 'https://www.google.com/maps/@45.5983156,-73.6398691,3a,75y,227.62h,86.92t/data=!3m6!1e1!3m4!1sI_7Wdj8YnNHY3H6bWe8ABg!2e0!7i16384!8i8192',
    },
    {
        name: 'Handrail Over Bank to Drop',
        borough: 'Ahuntsic',
        link: 'https://www.google.com/maps/@45.5727582,-73.6419067,3a,30.9y,174.45h,80.42t/data=!3m6!1e1!3m4!1sAoQ7yZlQKhBKbOtlSP0qGQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Bank to Rail',
        borough: 'Saint-Laurent',
        link: 'https://www.google.com/maps/@45.5179839,-73.687388,3a,75y,291.53h,89.63t/data=!3m6!1e1!3m4!1sh3HLRWcYn3yOBdfCnnMdfA!2e0!7i16384!8i8192',
    },
    {
        name: 'Volcano',
        borough: 'Saint-Leonard',
        link: 'https://www.google.com/maps/@45.5866661,-73.5969696,3a,90y,182.46h,62.79t/data=!3m8!1e1!3m6!1sAF1QipOA3fGkK0tG5cCppFo502Wwlk_xOSm544GpkE9e!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOA3fGkK0tG5cCppFo502Wwlk_xOSm544GpkE9e%3Dw203-h100-k-no-pi-0-ya122.61299-ro-0-fo100!7i6080!8i3040',
    },
    {
        name: 'Handrail to Schoolyard',
        borough: 'Montreal-Nord',
        link: 'https://www.google.com/maps/@45.5897961,-73.643788,3a,30.1y,269.43h,76.05t/data=!3m6!1e1!3m4!1sVanA9hl5axbu17E0nLLvUw!2e0!7i16384!8i8192',
    },
    {
        name: 'Manny Pad',
        borough: 'Chabanel',
        link: 'https://www.google.ca/maps/@45.5410539,-73.6532073,3a,75y,275.12h,65.27t/data=!3m6!1e1!3m4!1sYlz8j0oDehMb-JvF2R9REw!2e0!7i16384!8i8192',
    },
    {
        name: 'Curb to Bank',
        borough: 'Cabanel',
        link: 'https://www.google.ca/maps/@45.5424549,-73.6449278,3a,75y,167.58h,80.74t/data=!3m6!1e1!3m4!1s-XQiPj8GTq6FnuC8BtHNSA!2e0!7i16384!8i8192',
    },
    {
        name: 'Street Euro Up Gap',
        borough: 'Chabanel',
        link: 'https://www.google.ca/maps/@45.5365212,-73.6516114,3a,75y,351.83h,81.63t/data=!3m6!1e1!3m4!1sU6wImHrQYEaktAFtX8YqYA!2e0!7i16384!8i8192',
    },
    {
        name: 'Saint Jacques Banks',
        borough: 'Little Burgundy',
        link: 'https://www.google.com/maps/@45.4903117,-73.5710535,3a,75y,338.84h,76.97t/data=!3m6!1e1!3m4!1s2JNHXWD-23ZmaAps6ppgaw!2e0!7i16384!8i8192',
    },
    {
        name: 'Ride On Grind Plaza',
        borough: 'Saint-Henri',
        link: 'https://www.google.com/maps/@45.4752432,-73.5932501,3a,75y,8.4h,84.31t/data=!3m6!1e1!3m4!1sh5Ws-A-jXfZJhLZzQ3N4hg!2e0!7i16384!8i8192',
    },
    {
        name: 'Hubba',
        borough: 'Saint-Henri',
        link: 'https://www.google.com/maps/@45.4778075,-73.5884529,3a,26y,67.84h,85.56t/data=!3m7!1e1!3m5!1sRfnDUHH-ZtPn_ZmJO9bD0w!2e0!5s20181001T000000!7i16384!8i8192',
    },
    {
        name: 'Out Ledges',
        borough: 'Saint-Henri',
        link: 'https://www.google.com/maps/@45.4781358,-73.5853164,3a,75y,327.25h,85.19t/data=!3m7!1e1!3m5!1sr9SLhc3nhSC4X7xPrgif-g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dr9SLhc3nhSC4X7xPrgif-g%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D216.5388%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
    },
    {
        name: 'Bumpy Schoolyard',
        borough: 'Saint-Henri',
        link: 'https://www.google.com/maps/@45.4785906,-73.5856216,3a,57.3y,255.26h,89.24t/data=!3m6!1e1!3m4!1sqk1NvYhBU9lj-P_BTg2eow!2e0!7i16384!8i8192',
    },
    {
        name: 'Yellow High Bar',
        borough: 'Saint-Henri',
        link: 'https://www.google.com/maps/@45.4778412,-73.5856276,3a,24.2y,86.64h,84.36t/data=!3m6!1e1!3m4!1sQi36VSXceuTgkr5jWzHpmw!2e0!7i16384!8i81924',
    },
    {
        name: 'Victor Rousselot Plaza Ledges',
        borough: 'Little Burgundy',
        link: 'https://www.google.com/maps/@45.4802551,-73.5778435,3a,75y,262.12h,100.78t/data=!3m7!1e1!3m5!1s031InJGdYq5HLqYtwyrcRA!2e0!5s20190701T000000!7i16384!8i8192',
    },
    {   
        name: 'Over Rail to Thin Bank',
        borough: 'Cotes-des-Neiges',
        link: 'https://www.google.com/maps/@45.4984764,-73.6271274,3a,28.7y,195.29h,86.19t/data=!3m6!1e1!3m4!1sciwbLM-Hw6Q5h0zesfISiQ!2e0!7i16384!8i8192',
    },
    {
        name: 'Small Banks to Small Ledges',
        borough: 'Cotes-des-Neiges',
        link: 'https://www.google.com/maps/@45.4987856,-73.6276964,3a,75y,254.86h,71.21t/data=!3m6!1e1!3m4!1sav8lqkYTQXBQlJIgV001xA!2e0!7i16384!8i8192',
    },
    {
        name: 'Edouard Monpetit Hubba',
        borough: 'Cotes-des-Neiges',
        link: 'https://www.google.com/maps/@45.5090557,-73.6136118,3a,75y,139.95h,85.83t/data=!3m6!1e1!3m4!1s2jlybDwDzJ_gJoxxPWTnSg!2e0!7i16384!8i8192',
    },
    {
        name: 'Rail Yank to Crusty Bank',
        borough: 'Cotes-des-Neiges',
        link: 'https://www.google.com/maps/@45.5140665,-73.6087443,3a,17.2y,220.13h,85.62t/data=!3m7!1e1!3m5!1seOFrTPejRykx9z_pNEPdZA!2e0!5s20200901T000000!7i16384!8i8192',
    },
    {
        name: 'Hubba Plaza',
        borough: 'Cotes-des-Neiges',
        link: 'https://www.google.com/maps/@45.5032667,-73.6376215,3a,42.2y,231.93h,81.3t/data=!3m6!1e1!3m4!1s1NiWKuS6aycsiX2T9E5IiA!2e0!7i16384!8i8192',
    },
    {
        name: 'Van Horne',
        borough: 'Plateau/Mile-End',
        link: 'https://www.google.com/maps/@45.5277053,-73.6029956,3a,75y,3.33h,89.64t/data=!3m6!1e1!3m4!1sChhIhl2Si2KwTzmVHQJnPQ!2e0!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'Vans',
        borough: 'Hochelaga',
        link: 'https://www.google.com/maps/@45.5562254,-73.55384,2a,82.5y,101.71h,97.05t/data=!3m6!1e1!3m4!1sLI77LHmlrqtlHBdUhKcmug!2e0!7i13312!8i6656',
        type: 'Skatepark',
    },
    {
        name: 'Taz/P45',
        borough: 'Ahuntsic',
        link: 'https://www.google.com/maps/@45.5621993,-73.6374494,3a,22.2y,132.44h,90.38t/data=!3m6!1e1!3m4!1sAlb1nIYnPLzQ9pZx39Bo1g!2e0!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'Spin',
        borough: 'South Shore',
        link: 'https://www.google.com/maps/@45.444226,-73.43371,3a,75y,74.17h,106.28t/data=!3m7!1e1!3m5!1sm1rUbLgJk_XUYHbQlnu99Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dm1rUbLgJk_XUYHbQlnu99Q%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D76.75634%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'Prefontaine',
        borough: 'Hochelaga',
        link: 'https://www.google.com/maps/@45.5423203,-73.5540984,3a,75y,105.23h,91.03t/data=!3m7!1e1!3m5!1s_0y_CSy-kCoiqlUEXcTnOA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D_0y_CSy-kCoiqlUEXcTnOA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D94.5919%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'Ahuntsic',
        borough: 'Ahuntsic',
        link: 'https://www.google.com/maps/place/Skatepark/@45.5545386,-73.6666869,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc918bb91f9ea87:0x63140536d70012ab!8m2!3d45.5545349!4d-73.6644982',
        type: 'Skatepark',
    },
    {
        name: 'Rosemont',
        borough: 'Rosemont',
        link: 'https://www.google.com/maps/@45.5387732,-73.5923431,3a,37.9y,292.48h,90.77t/data=!3m6!1e1!3m4!1sZEFqvOtPEv48TvhYVizAFw!2e0!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'Verdun',
        borough: 'Verdun',
        link: 'https://www.google.com/maps/@45.4648883,-73.5619144,3a,75y,272.54h,82.81t/data=!3m8!1e1!3m6!1sAF1QipNIdReObjYmuQ12p7AjX9peSmvpLBL20Ixbgpn0!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNIdReObjYmuQ12p7AjX9peSmvpLBL20Ixbgpn0%3Dw203-h100-k-no-pi-0-ya274.19843-ro0-fo100!7i8704!8i4352',
        type: 'Skatepark',
    },
    {
        name: 'Lachine',
        borough: 'Lachine',
        link: 'https://www.google.com/maps/@45.4384846,-73.6726321,3a,72.3y,259.58h,83.02t/data=!3m7!1e1!3m5!1sdO6I1KCNXgJdke452pDNag!2e0!5s20201101T000000!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'Westmount (Summer Only)',
        borough: 'Westmount',
        link: 'https://www.google.com/maps/@45.4826474,-73.5906038,3a,36y,72.87h,88.52t/data=!3m7!1e1!3m5!1sr3V4U-_0cXzjfwwYBqGSnw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dr3V4U-_0cXzjfwwYBqGSnw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D217.44481%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'Papineau Plaza',
        borough: 'Village',
        link: 'https://www.google.com/maps/@45.5253952,-73.5518418,3a,75y,149.84h,89.43t/data=!3m7!1e1!3m5!1skrieTEryadfzfQ5OgLZeMw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DkrieTEryadfzfQ5OgLZeMw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D140.8417%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'St Lambert',
        borough: 'South Shore',
        link: 'https://www.google.com/maps/@45.5066439,-73.517563,3a,15.2y,242.66h,90.29t/data=!3m6!1e1!3m4!1svA2pb7dyFWjIzYMqg9ysjA!2e0!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'VSL',
        borough: 'Saint-Laurent',
        link: 'https://www.google.com/maps/@45.5099445,-73.7008559,3a,48.5y,192.62h,90.54t/data=!3m6!1e1!3m4!1sz4lDYn9MTZxjpFr_fvrd6w!2e0!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'Sandspit Park',
        borough: 'Village',
        link: 'https://www.google.com/maps/@45.5292632,-73.5598616,3a,67.5y,72.23h,92.8t/data=!3m7!1e1!3m5!1sCTWjF3Le2qJwDBlC_5mZ9A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DCTWjF3Le2qJwDBlC_5mZ9A%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D20.271143%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'Jarry',
        borough: 'Park-Extension',
        link: 'https://www.google.com/maps/@45.5368705,-73.6325229,3a,40.1y,87.61h,89.48t/data=!3m6!1e1!3m4!1sE7juLyTJYlum1UtRO6NLCA!2e0!7i16384!8i8192',
        type: 'Skatepark',
    },
    {
        name: 'Benny',
        borough: 'NDG',
        link: 'https://www.google.com/maps/@45.4664536,-73.6335297,3a,75y,184.1h,87.7t/data=!3m8!1e1!3m6!1sAF1QipMXVuJSqjkbbged9EmwcL3cLKm5uE7tHAKxLh2L!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMXVuJSqjkbbged9EmwcL3cLKm5uE7tHAKxLh2L%3Dw203-h100-k-no-pi-0-ya92.58115-ro-0-fo100!7i6080!8i3040',
        type: 'Skatepark',
    }     
]

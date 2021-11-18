function GetValue() {
    var myarray = new Array("Be yourself; everyone else is already taken.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "So many books, so little time.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "You only live once, but if you do it right, once is enough.",
        "In three words I can sum up everything I've learned about life: it goes on.",
        "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "A friend is someone who knows all about you and still loves you.",
        "To live is the rarest thing in the world. Most people exist, that is all.",
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "It is better to be hated for what you are than to be loved for what you are not.",
        "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
        "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
        "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
        "Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.",
        "A day without sunshine is like, you know, night.",
        "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
        "There is no greater agony than bearing an untold story inside you.",
        "Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.",
        "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
        "Folks are usually about as happy as they make their minds up to be.",
        "One good thing about music, when it hits you, you feel no pain.",
        "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.",
        "Not all of us can do great things. But we can do small things with great love.",
        "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "So, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be.",
        "There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.",
        "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.");

    var random = myarray[Math.floor(Math.random() * myarray.length)];
    document.getElementById("message").innerHTML = random;
}



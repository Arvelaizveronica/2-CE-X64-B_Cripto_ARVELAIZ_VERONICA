// crypto_lib.js

// 1️⃣ what_are_words_worth()
function what_are_words_worth() {
    var input = prompt("Entrez un mot ou une phrase :");
    var confirmation = confirm(`Votre entrée \"${input}\" comporte ${input.length} caractère(s)`);
    return confirmation;
}

// 2️⃣ count_words(string_of_words)
function count_words(string_of_words) {
    var count = 1;
    for (var i = 0; i < string_of_words.length; i++) {
        if (string_of_words.charAt(i) === " ") {
            count++;
        }
    }
    return count;
}

// 3️⃣ count_words(string_of_words, letter)
function count_words(string_of_words, letter) {
    var count = 1;
    for (var i = 0; i < string_of_words.length; i++) {
        if (string_of_words.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}

// 4️⃣ count_vowels(string_of_words)
var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

function is_a_vowel(letter) {
    for (var i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) return true;
    }
    return false;
}

function count_vowels(string_of_words) {
    var count = 0;
    for (var i = 0; i < string_of_words.length; i++) {
        if (is_a_vowel(string_of_words.charAt(i))) count++;
    }
    return count;
}

// 5️⃣ count_consonants(string_of_words)
function count_consonants(string_of_words) {
    return string_of_words.length - count_vowels(string_of_words);
}

// 6️⃣ remove(string_of_words, character)
function remove(string_of_words, character) {
    var newString = "";
    for (var i = 0; i < string_of_words.length; i++) {
        if (string_of_words.charAt(i) !== character) {
            newString += string_of_words.charAt(i);
        }
    }
    return newString;
}

// 7️⃣ remove_many(string_of_words, characters)
function remove_many(string_of_words, characters) {
    var newString = "";
    for (var i = 0; i < string_of_words.length; i++) {
        var keep = true;
        for (var j = 0; j < characters.length; j++) {
            if (string_of_words.charAt(i) === characters.charAt(j)) {
                keep = false;
                break;
            }
        }
        if (keep) newString += string_of_words.charAt(i);
    }
    return newString;
}

// 8️⃣ crypto(a_string, a_number)
function crypto(a_string, a_number) {
    var result = "";
    for (var i = 0; i < a_string.length; i++) {
        var char = a_string.charAt(i);
        if (char >= 'a' && char <= 'z') {
            var shifted = ((char.charCodeAt(0) - 97 + a_number) % 26) + 97;
            result += String.fromCharCode(shifted);
        } else if (char >= 'A' && char <= 'Z') {
            var shifted = ((char.charCodeAt(0) - 65 + a_number) % 26) + 65;
            result += String.fromCharCode(shifted);
        } else {
            result += char;
        }
    }
    return result;
}

// 9️⃣ decrypt(a_string, a_number)
function decrypt(a_string, a_number) {
    return crypto(a_string, 26 - (a_number % 26)); 
}

// 🔟 enigma(crypted_string)
function enigma(crypted_string) {
    for (var i = 1; i <= 25; i++) {
        console.log(`Clé ${i}: ` + decrypt(crypted_string, i));
    }
}

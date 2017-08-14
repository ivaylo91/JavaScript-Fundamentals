/**
 * @author Ivaylo Penev
 */
const searchText = function (searchInput, text) {

    return text.match(new RegExp(searchInput, "g") || []).length;
};
console.log(searchText('the', 'The quick brown fox jumps over the lay dog.'));
console.log(searchText('ma', 'Marine mammal training is the training and caring for marine life such as dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));
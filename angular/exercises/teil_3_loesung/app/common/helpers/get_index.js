// Array.prototype.findIndex wäre besser, braucht aber ein Polyfill
export default function getIndex(id, list) {
  for (let i = 0; i < list.length; i++) {
    const value = list[i];
    if (id === value._id) {
      return i;
    }
  }
}


// Hier muss eine Klasse InMemoryDB definiert werden, folgende Methoden besitzt:

// load() -> Daten werden als Object mit folgender Struktur zurückgeliefert:
// {
//    nextId: 5,
//    todos: [{id: 1, title: 'foo', checked: false}, ...],
// }


// save(data) -> data ist ein Array nach obigem Muster


// Bitte beachten, dass nextId entweder beim Speichern oder beim Laden berechnet werden muss

// Bitte auch beachten, dass beim ersten Laden sinnvolle Daten zurückgeliefert werden

export default InMemoryDB;
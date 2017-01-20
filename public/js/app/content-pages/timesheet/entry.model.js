export var Entry = (function () {
    function Entry(name, id, date, startTime, endTime, dailyWage, entryId) {
        this.name = name;
        this.id = id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.entryId = entryId;
        this.dailyWage = dailyWage.toFixed(2);
    }
    return Entry;
}());
//# sourceMappingURL=entry.model.js.map
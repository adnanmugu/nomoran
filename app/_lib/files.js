export default class Files {
  /**
   *
   * @param {string} name
   * @param {string} type
   * @param {number} fileCount
   */
  constructor(name, type, fileCount) {
    this.name = name;
    this.type = type;
    this.fileCount = fileCount;
  }
}

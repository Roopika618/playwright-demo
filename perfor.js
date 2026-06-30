class perfor{
    constructor(page){
        this.page = page;
        this.perforMenu = page.getByRole('link', { name: 'Performance' });
        this.reset=page.getByRole('button', { name: 'Reset' });
}
async resetPerformance(){
    await this.perforMenu.click();
    await this.reset.click();
}
}
module.exports = { perfor };
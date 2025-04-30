function randomizeTeams() {
    const names = document.getElementById('names').value.trim().split('\n').filter(name => name.trim());
    if (names.length < 2) {
        alert('请输入至少两个名字！');
        return;
    }
    const count = Math.min(names.length, 10);
    const adjustedCount = count % 2 === 0 ? count : count - 1;

    const shuffled = names.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, adjustedCount);

    const teamRed = selected.slice(0, adjustedCount / 2);
    const teamBlue = selected.slice(adjustedCount / 2);

    document.getElementById('teamRed').innerHTML = `<strong>红队</strong><br>${teamRed.join('<br>')}`;
    document.getElementById('teamBlue').innerHTML = `<strong>蓝队</strong><br>${teamBlue.join('<br>')}`;
}

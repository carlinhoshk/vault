
- name: Criar Release no GitHub
  uses: softprops/action-gh-release@v2
  with:
    tag_name: v${{ github.run_number }}
    target_commitish: main
    name: Release ${{ github.run_number }}
    body: |
      - Release automática gerada pelo CI.
      - Commit: ${{ github.sha }}
      - Veja o changelog para detalhes.
    draft: false
    prerelease: false
    files: ./target/*.jar
  env:
    GITHUB_TOKEN: ${{ secrets.GH_PAT }}
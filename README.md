### Update History
- 2025-01-24, Ethan Lee: Added deployment instructions.

## Website Deployment Instructions

Follow the steps below to deploy the website to [akpsi.students.jh.edu](https://akpsi.students.jh.edu):

### 1. Update `package.json`

After completing your code changes, ensure that the `"homepage"` field in your `package.json` is set correctly:

```json
"homepage": "https://akpsi.students.jh.edu",
```

### 2. Run the Deployment Command

In the `/web-app` directory, execute the following command in your terminal:

```bash
npm run deploy
```

### 3. Monitor Deployment via GitHub Actions

Once the deployment command is executed, visit the [GitHub Actions page](https://github.com/akpsi-jhu/rho-psi-website-v1/actions) to verify that the deployment process completes successfully.

### 4. Configure Custom Domain

After the initial deployment completes:

1. Navigate to the [GitHub Pages settings](https://github.com/akpsi-jhu/rho-psi-website-v1/settings/pages).
2. Update the **Custom domain** field to:
   ```
   akpsi.students.jh.edu
   ```

### 5. Verify Final Deployment

Finally, return to the [GitHub Actions page](https://github.com/akpsi-jhu/rho-psi-website-v1/actions) to ensure that the final deployment process is completed without errors.

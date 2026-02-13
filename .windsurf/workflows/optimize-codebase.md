---
description: Optimize the codebase following established patterns and best practices
---

# Codebase Optimization Workflow

This workflow helps optimize the Fambord backend by applying the established coding standards and best practices.

## Steps

1. **Review Code Quality**
   - Check for TypeScript strict mode violations
   - Look for missing DTO validations
   - Identify untested business logic
   - Find missing Swagger documentation

2. **Security Audit**
   - Verify all endpoints have proper authentication
   - Check for exposed sensitive data
   - Validate input sanitization
   - Review role-based access control

3. **Performance Analysis**
   - Identify N+1 query problems
   - Check for missing database indexes
   - Review pagination implementation
   - Analyze response sizes

4. **Code Consistency**
   - Ensure all modules follow the established pattern
   - Check naming conventions
   - Verify error handling consistency
   - Review import organization

5. **Documentation Updates**
   - Update API documentation
   - Add inline comments for complex logic
   - Update README with new patterns
   - Document any deviations from standards

## Commands

```bash
# Run linting
npm run lint

# Run tests with coverage
npm run test:cov

# Type checking
npx tsc --noEmit

# Database schema check
npm run schema:log
```

## Checklist

- [ ] All new modules follow the template structure
- [ ] DTOs have proper validation decorators
- [ ] Services handle errors appropriately
- [ ] Controllers have Swagger documentation
- [ ] Database queries are optimized
- [ ] Tests cover business logic
- [ ] Code follows naming conventions
- [ ] Security best practices are applied

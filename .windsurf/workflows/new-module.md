---
description: Scaffold a new NestJS module with controller, service, DTOs, and entity
---

# New Module Workflow

When asked to create a new module, follow these steps exactly:

## 1. Create the module directory structure

```
src/modules/[module-name]/
├── [module-name].module.ts
├── [module-name].controller.ts
├── [module-name].service.ts
├── dto/
│   ├── create-[module-name].dto.ts
│   └── update-[module-name].dto.ts
└── entities/
    └── [module-name].entity.ts
```

## 2. Entity

- Use `@PrimaryGeneratedColumn('uuid')` for the id
- Include `@CreateDateColumn()` and `@UpdateDateColumn()`
- Define all columns with appropriate TypeORM decorators
- Add relationship decorators if needed

## 3. DTOs

- Create DTO: use `class-validator` decorators on every field
- Create DTO: use `@ApiProperty()` on every field
- Update DTO: `export class UpdateDto extends PartialType(CreateDto) {}`

## 4. Service

- Inject repository with `@InjectRepository(Entity)`
- Implement: create, findAll, findOne, update, remove
- Use `NotFoundException` when entity not found
- Use `this.repository.create()` then `this.repository.save()` for inserts
- Use `this.repository.merge()` then `this.repository.save()` for updates

## 5. Controller

- Add `@ApiTags('ModuleName')` and `@Controller('module-name')`
- Add `@ApiOperation({ summary: '...' })` on every endpoint
- Add `@ApiResponse()` decorators for status codes
- Keep controller thin — delegate to service

## 6. Module

- Import `TypeOrmModule.forFeature([Entity])`
- Register controller and service
- Export service if other modules need it

## 7. Register in AppModule

- Import the new module in `src/app.module.ts`

## 8. Generate migration

```bash
npm run typeorm -- migration:generate -d src/config/data-source.ts src/database/migrations/Add[ModuleName]Table
```

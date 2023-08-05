export default function LoginPage() {
	return (
		<div className="flex justify-center items-center w-full h-screen bg-gray-100">
			<div className="flex justify-center shadow-md">
				<div className="p-6 rounded bg-white">
					<h3 className="text-2xl font-bold mb-6">Ingreso</h3>
					<form className="flex flex-col gap-4">
						<div className="">
							<input
								type="text"
								className="form-input"
								placeholder="Correo"
							/>
						</div>
						<div className="">
							<input
								type="password"
								className="form-input"
								placeholder="Contraseña"
							/>
						</div>
						<div className="">
							<input
								type="submit"
								className="cursor-pointer rounded bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4"
								value="Login"
							/>
						</div>
					</form>
				</div>

				<div className="p-6 rounded bg-emerald-500">
					<h3 className="text-2xl font-bold mb-6 ">Registro</h3>
					<form className="flex flex-col gap-4">
						<div className="">
							<input
								type="text"
								className="form-input"
								placeholder="Nombre"
							/>
						</div>
						<div className="">
							<input
								type="email"
								className="form-input"
								placeholder="Correo"
							/>
						</div>
						<div className="">
							<input
								type="password"
								className="form-input"
								placeholder="Contraseña"
							/>
						</div>

						<div className="">
							<input
								type="password"
								className="form-input"
								placeholder="Repita la contraseña"
							/>
						</div>

						<div className="">
							<input
								type="submit"
								className="cursor-pointer rounded bg-white hover:bg-gray-100 py-2 px-4"
								value="Crear cuenta" />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
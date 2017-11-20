/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw2.taller5.servicio;

import co.edu.uptc.sw2.taller5.dto.EstudianteDTO;
import co.edu.uptc.sw2.taller5.dto.FacultadDTO;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author YOHAN TALON 00
 */

@Path("/Estudiante")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class EstudianteServicio {
    /**
     * retorna una lista con los Facultad que se encuentran en la base de datos
     *
     * @return retorna una lista de FacultadDTO
     * @generated
     */
    @GET
    public List<EstudianteDTO> obtenerTodosEstudiante() {
        return ProveedorInformacion.instance().obtenerTodos(EstudianteDTO.class);
    }

    /**
     * @param id identificador del elemento Facultad
     * @return Facultad del id dado
     * @generated
     */
    @GET
    @Path("/{id}")
    public EstudianteDTO obtenerEstudiante(@PathParam("id") Long id) {
        return (EstudianteDTO) ProveedorInformacion.instance().obtener(EstudianteDTO.class, id);
    }

    /**
     * almacena la informacion de Facultad
     *
     * @param dto Facultad a guardar
     * @return Facultad con los cambios realizados por el proceso de guardar
     * @generated
     */
    @POST
    public EstudianteDTO guardarEstudiante(EstudianteDTO dto) {
        return (EstudianteDTO) ProveedorInformacion.instance().guardar(dto);
    }

    /**
     * elimina el registro Facultad con el identificador dado
     *
     * @param id identificador del Facultad
     * @generated
     */
    @DELETE
    @Path("/{id}")
    public void borrarEstudiante(@PathParam("id") Long id) {
        ProveedorInformacion.instance().eliminar(EstudianteDTO.class, id);
    }
    
    @GET
    @Path("/consulta")
    public List<EstudianteDTO> consultarEstudiante(@QueryParam("nombre") String nombre, @QueryParam("apellido") String apellido){
        List<EstudianteDTO> lista=obtenerTodosEstudiante();
        List<EstudianteDTO> respuesta=new ArrayList<>();
        for(EstudianteDTO f:lista){
            if((f.getNombres().toUpperCase().contains(nombre.toUpperCase()))||(f.getApellidos().toUpperCase().contains(apellido.toUpperCase()))){
                respuesta.add(f);
            }else{
                if((f.getNombres().toUpperCase().contains(nombre.toUpperCase()))&(f.getApellidos().toUpperCase().contains(apellido.toUpperCase()))){
                respuesta.add(f);
                }
            }
        }
        return respuesta;
    }
    
    

}
